import React, { useState, useEffect } from 'react';
import type { PaginationInfo } from '../../types/Pagintaion';
import styles from './Pagination.module.css';


interface PaginationProps {
    onPageChange?: (params: PaginationInfo) => void;
    totalItems?: number;
    itemsPerPage?: number;
    className?: string;
}


const PaginationNav: React.FC<PaginationProps> = ({ onPageChange, totalItems = 0, itemsPerPage = 10, className='' }) => {
    const [currentPage, setCurrentPage] = useState<number>(() => {
        const params = new URLSearchParams(window.location.search);
        return parseInt(params.get('page') || '1', 10)
    });

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        params.set('page', currentPage.toString());
        window.history.pushState({}, '', `${window.location.pathname}?${params}`);

        onPageChange?.({
            offset: (currentPage - 1) * itemsPerPage,
            limit: itemsPerPage,
            count: totalItems
        });
    }, [currentPage, itemsPerPage, onPageChange, totalItems]);

    return (
        <nav className={`${styles.pagination_container} ${className}`} role='navigation' aria-label='Pages'>
            <ul className={styles.pagination}>
                <li>
                    <button 
                        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                        aria-disabled={currentPage === 1}
                    >
                        ← Back
                    </button>
                </li>

                {Array.from({length: totalPages}, (_, i) => i + 1).map((num) => (
                    <li key={num}>
                        <button
                            onClick={() => setCurrentPage(num)}
                            className={currentPage === num ? styles.active : ''}
                            aria-current={currentPage === num ? 'page' : undefined}
                        >
                            {num}
                        </button>
                    </li>
                ))}

                <li>
                    <button 
                        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                        disabled={currentPage === totalPages}
                        aria-disabled={currentPage === totalPages}
                    >
                        Forward →
                    </button>
                </li>
            </ul>
        </nav>
    )
}


export default PaginationNav;
