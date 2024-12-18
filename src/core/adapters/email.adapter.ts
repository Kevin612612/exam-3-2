// Importing a custom delay function that pauses execution for a given duration
import { delay } from "../../helpers/delay";

/**
 * Simulates sending an email by introducing a delay and then rejecting the promise.
 * This is likely a placeholder function to be replaced with actual email-sending logic.
 *
 * @param email - The recipient's email address
 * @param message - The message content to be sent
 * @returns A rejected promise with an error indicating the email could not be sent
 */
async function sendEmail(email: string, message: any): Promise<never> {
    // Simulate a delay to mimic an asynchronous operation (e.g., sending an email)
    await delay(2000);

    // Always reject the promise with an error for demonstration purposes
    return Promise.reject(new Error('The email could not be sent'));
}

/**
 * A simple adapter to handle email-sending logic.
 * This is a utility object that contains methods for specific email operations.
 */
export const emailAdapter = {
    /**
     * Sends a registration email containing a confirmation code.
     *
     * @param email - The recipient's email address
     * @param confirmationCode - The unique confirmation code for the user
     * @returns A promise that resolves or rejects based on the `sendEmail` function
     */
    async sendRegistrationEmail(email: string, confirmationCode: string): Promise<never> {
        // Construct the email content, including a confirmation link with the code
        const emailContent = `Follow the link to confirm your registration: <a href="http://localhost:3000?code=${confirmationCode}">Confirm Registration</a>`;

        // Call the sendEmail function with the recipient email and the message content
        return sendEmail(email, emailContent);
    },
};
