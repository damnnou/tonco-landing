import React, { useState } from 'react';
import Button from './common/Button';
import { ArrowRight, X } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';

const RECAPTCHA_SITE_KEY = process.env.RECAPTCHA_SITE_KEY;

const MailchimpForm = ({ close }: { close: () => void }) => {
    const [email, setEmail] = useState('');
    const [wallet, setWallet] = useState('');
    const [loading, setLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');
    const [errors, setErrors] = useState({ email: '', wallet: '' });
    const [captchaValue, setCaptchaValue] = useState<string | null>(null);

    const validate = () => {
        let valid = true;
        const newErrors = { email: '', wallet: '' };

        if (!email) {
            newErrors.email = 'Email is required';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email is invalid';
            valid = false;
        }

        if (!wallet) {
            newErrors.wallet = 'Wallet address is required';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validate() || !captchaValue) return;

        setLoading(true);
        setResponseMessage('');

        try {
            // Замените URL на ваш реальный адрес Mailchimp
            const response = await fetch(
                'https://finance.us12.list-manage.com/subscribe/post-json?u=9743d9982c267671cd728fbda&id=225dfc1caf&f_id=00b8aee9f0',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ EMAIL: email, WALLET: wallet }),
                }
            );

            if (response.ok) {
                setResponseMessage('Success! You have been subscribed.');
                setEmail('');
                setWallet('');
                setCaptchaValue(null);
            } else {
                setResponseMessage('Error! Please try again.');
            }
        } catch (error) {
            setResponseMessage('Error! Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-[650px] animate-fade-up animate-duration-300 max-md:w-full  mx-auto max-md:p-6 p-8 gap-4 h-fit bg-white dark:bg-dark-background rounded-3xl shadow-lg">
            <form
                onSubmit={handleSubmit}
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="space-y-4"
            >
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-semibold">
                        Enroll to whitelist
                    </h2>
                    <X
                        onClick={close}
                        className="text-gray-600 self-start hover:text-black dark:hover:text-white cursor-pointer transition-all duration-200"
                    />
                </div>

                <div className="flex flex-col gap-4 text-sm">
                    Provide your details below to get access to our testnet. Our
                    team will reach out once you've been approved.
                    <p>
                        <span className="text-red-500">*</span> indicates
                        required
                    </p>
                </div>
                <div>
                    <label htmlFor="mce-EMAIL" className="block mb-1">
                        Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        name="EMAIL"
                        className={`w-full border rounded-xl p-3 dark:bg-neutral-800 dark:border-neutral-600 ${
                            errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        id="mce-EMAIL"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <span className="text-sm text-gray-500 dark:text-gray-300">
                        Your email address
                    </span>
                    {errors.email && (
                        <p className="text-red-500 text-sm">{errors.email}</p>
                    )}
                </div>
                <div className="">
                    <label htmlFor="mce-WALLET" className="block mb-1">
                        TON Wallet <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="WALLET"
                        className={`w-full border rounded-xl p-3 dark:bg-neutral-800 dark:border-neutral-600 ${
                            errors.wallet ? 'border-red-500' : 'border-gray-300'
                        }`}
                        id="mce-WALLET"
                        value={wallet}
                        onChange={(e) => setWallet(e.target.value)}
                        required
                    />
                    <span className="text-sm text-gray-500 dark:text-gray-300">
                        Your TON wallet address
                    </span>
                    {errors.wallet && (
                        <p className="text-red-500 text-sm">{errors.wallet}</p>
                    )}
                </div>

                {RECAPTCHA_SITE_KEY ? (
                    <ReCAPTCHA
                        sitekey={RECAPTCHA_SITE_KEY} // Замените на ваш ключ сайта
                        onChange={(value) => setCaptchaValue(value)}
                        className="my-4"
                    />
                ) : null}

                {responseMessage && (
                    <div
                        className={`mt-2 ${
                            responseMessage.includes('Error')
                                ? 'text-red-500'
                                : 'text-green-500'
                        }`}
                    >
                        {responseMessage}
                    </div>
                )}
                <div className="grid grid-cols-2 gap-6 w-full">
                    <Button
                        onClick={close}
                        variant="secondary"
                        type="button"
                        id="mc-embedded-subscribe"
                    >
                        Cancel
                    </Button>
                    <Button
                        disabled={!email || !wallet || !captchaValue}
                        className={
                            !email || !wallet || !captchaValue
                                ? 'opacity-50 hover:!-translate-y-0'
                                : ''
                        }
                        variant="primary"
                        type="submit"
                        id="mc-embedded-subscribe"
                    >
                        Subscribe <ArrowRight />
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default MailchimpForm;
