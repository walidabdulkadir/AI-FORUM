
import bcrypt from "bcryptjs";
import { safeExecute } from "../../../../db/config.js";
import { BadRequestError } from "../../../utils/errors/index.js";

const normalizeEmail = (email) => email.trim().toLowerCase();

// Check whether a user already exists
export const checkUserExists = async (email) => {
  const normalizedEmail = normalizeEmail(email);

  const sql = "SELECT user_id FROM users WHERE email = ? LIMIT 1";
  const rows = await safeExecute(sql, [normalizedEmail]);

  return rows.length > 0;
};

// Register a new user
export const registerService = async ({
  firstName,
  lastName,
  email,
  password,
}) => {
  const normalizedEmail = normalizeEmail(email);

  const userExists = await checkUserExists(normalizedEmail);

  if (userExists) {
    throw new BadRequestError(
      "User already exists with this email."
    );
  }

  // Generate a random salt
  const salt = await bcrypt.genSalt(10);

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, salt);

  // Insert the user into the database
  const sql =
    "INSERT INTO users (first_name, last_name, email, password_hash) VALUES (?, ?, ?, ?)";

  let result;

  try {
    result = await safeExecute(sql, [
      firstName.trim(),
      lastName.trim(),
      normalizedEmail,
      hashedPassword,
    ]);
  } catch (error) {
    if (error?.code === "ER_DUP_ENTRY") {
      throw new BadRequestError(
        "User already exists with this email."
      );
    }

    throw error;
  }

  // Return user information without password
  return {
    id: result.insertId,
    firstName: firstName.trim(),
    lastName: lastName.trim(),
    email: normalizedEmail,
  };
};
