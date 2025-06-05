import React, { useEffect, useRef, type PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';


interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    title?: string;
}


const Modal: React.FC<ModalProps & PropsWithChildren> = ({ 
    isOpen = false, 
    onClose = () => {}, 
    title = '', 
    children 
}) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const portalRoot = document.getElementById('modal-root');
    
    if (!portalRoot) {
        const newPortalRoot = document.createElement('div');
        newPortalRoot.id = 'modal-root';
        document.body.appendChild(newPortalRoot);
    }

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        }

        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.body.style.overflow = 'unset';
            document.removeEventListener('keydown', handleEscape);
        }
    }, [isOpen, onClose]);

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            onClose();
        }
    }

    if (!isOpen) {
        return null;
    }

    return createPortal(
        <div className={styles.modal_overlay} onClick={handleOverlayClick}>
            <div ref={modalRef} className={styles.modal_container}>
                <div className={styles.modal_header}>
                    <h3 className={styles.modal_title}>{title}</h3>
                    <button
                        className={styles.modal_close_button}
                        onClick={onClose}
                        aria-label='Close modal'
                    >
                        &times;
                    </button>
                </div>

                <div className={styles.modal_body}>{children}</div>
            </div>
        </div>,
        document.getElementById('modal-root')!
    )
}


export default Modal;
