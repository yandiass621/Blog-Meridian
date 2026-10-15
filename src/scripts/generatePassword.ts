import bcrypt from 'bcrypt';

async function generatePasswordHash(): Promise<void>{
    const password = 'Meridian@123';

    const passwordHash = await bcrypt.hash(password, 10);

    console.log(passwordHash);
}

generatePasswordHash();