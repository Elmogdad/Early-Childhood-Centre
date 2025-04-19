import bcrypt from 'bcrypt';

export const hashValue = async (value: string, saltRound?: number ) => {
    return bcrypt.hash(value, saltRound || 8);
}

export const compareValue = async (value: string, hashedValue: string) => {
    return bcrypt.compare(value, hashedValue).catch(() => false);
}