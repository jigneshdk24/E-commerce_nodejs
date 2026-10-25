
import {
  UniqueConstraintError,
  ForeignKeyConstraintError,
  ValidationError,
} from 'sequelize';

const errorHandler = (err, req, res, next) => {
  console.error(err);

  if (err instanceof UniqueConstraintError) {
    return res.status(409).json({
      success: false,
      message: 'A record with this value already exists.',
    });
  }

  if (err instanceof ForeignKeyConstraintError) {
    return res.status(400).json({
      success: false,
      message: 'The referenced record does not exist or cannot be used.',
    });
  }

  if (err instanceof ValidationError) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed.',
      errors: err.errors.map((item) => ({
        field: item.path,
        message: item.message,
      })),
    });
  }

  return res.status(500).json({
    success: false,
    message: 'Internal server error.',
  });
};

export default errorHandler;
