export const validatePassword = (password: string, input: HTMLInputElement): void => {
    // Password validation logic
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    const isValid = password.length >= minLength &&
                    hasUpperCase &&
                    hasLowerCase &&
                    hasNumber &&
                    hasSpecialChar;

        input.setCustomValidity(
            isValid 
            ? "" 
            : `Password must:
            • be 8+ characters long
            • include uppercase and lowercase letters
            • include a number and special character`
        );
}