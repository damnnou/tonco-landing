import React, { ReactElement, ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Button from './common/Button';
import { Mail, X } from 'lucide-react';
import MailchimpForm from './MailchimpForm';

const WaitlistModal = ({
    children,
}: {
    children?: ReactElement<HTMLButtonElement>;
}) => {
    const [visible, setVisible] = useState(false);
    const [animating, setAnimating] = useState(false);

    const handleClose = (e: any): void => {
        if (e.target === e.currentTarget) {
            setAnimating(true); // Начать анимацию закрытия
            setTimeout(() => {
                setVisible(false); // Скрыть модал после анимации
                setAnimating(false); // Сброс состояния анимации
            }, 300); // Задержка должна совпадать с длительностью анимации
        }
    };

    const handleOpen = () => {
        setVisible(true);
        setAnimating(false); // Сброс анимации при открытии
    };

    const clonedButton = children ? (
        React.cloneElement(children, { onClick: handleOpen } as any)
    ) : (
        <Button
            onClick={handleOpen}
            className="mx-auto border !bg-white !border-primary !text-primary"
            variant="action"
        >
            Join Waitlist
        </Button>
    );

    return (
        <>
            {clonedButton}

            {visible &&
                ReactDOM.createPortal(
                    <div
                        className={`fixed inset-0 px-4 flex items-center justify-center z-50 bg-black bg-opacity-50 transition-opacity duration-300 ${
                            animating ? 'opacity-0' : 'opacity-100'
                        }`}
                        onClick={handleClose}
                    >
                        <div
                            className={`transform transition-all duration-300 ${
                                animating
                                    ? 'scale-95 opacity-0'
                                    : 'scale-100 opacity-100'
                            }`}
                        >
                            <MailchimpForm close={handleClose as any} />
                        </div>
                    </div>,
                    document.body // Рендерим в body
                )}
        </>
    );
};

export default WaitlistModal;
