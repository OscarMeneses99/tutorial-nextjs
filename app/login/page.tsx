import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Login'
};

export default function LoginPage() {
    return (
        <main className="flex items-center justify-center md:h-screen">
            <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 mt-5">
                <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
                    <div className="w-32 text-white md:w-36">
                        <AcmeLogo />
                    </div>
                </div>
                <LoginForm />
                <div className='w-full bg-slate-100 rounded p-10 flex flex-col justify-center items-center'>
                    <p className='flex'>
                        <InformationCircleIcon className='w-6 h-6 text-yellow-500' />
                        <span className='ml-1 font-bold text-xl'>Accessing the App</span>
                    </p>
                    <p className='font-semibold text-lg'>Here are the login details:</p>
                    <div>
                        <p><strong>Username: </strong>user@nextmail.com</p>
                        <p><strong>Password: </strong>123456</p>
                    </div>
                </div>
            </div>
        </main>
    );
}