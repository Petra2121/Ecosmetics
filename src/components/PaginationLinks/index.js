import React from 'react'
import styles from './style.module.css'

import { GoChevronLeft } from "@react-icons/all-files/go/GoChevronLeft";
import { GoChevronRight } from "@react-icons/all-files/go/GoChevronRight";

import {Pagination, PaginationItem, PaginationLink} from 'reactstrap'

const PaginationLinks = ({currentPage, numberOfPages}) => {
    const isFirst = currentPage === 1
    const isLast = currentPage === numberOfPages
    const previousPage = currentPage -1 === 1 ? '/blog' : '/blog/' + (currentPage-1).toString()
    const nextPage = '/blog/' + (currentPage + 1).toString()
    // return(
    //     <Pagination className={styles.wrapper}>
    //         {
    //             isFirst ? (
    //                 <PaginationItem disabled></PaginationItem>
    //             ) : (
    //                 <PaginationItem>
    //                     <PaginationLink previous href={previousPage}></PaginationLink>
    //                 </PaginationItem>
    //             )
    //         }
    //         {Array.from({ length: numberOfPages}, (_, i) => 
    //             currentPage === i + 1 ? (
    //             <PaginationItem active key={`page-number${i + 1}`}>
    //                 <PaginationLink href={`/blog/${i === 0 ? '' : '' + (i+1)}`}>
    //                     {i + 1}
    //                 </PaginationLink>
    //             </PaginationItem>
    //             ):(
    //             <PaginationItem key={`page-number${i + 1}`}>
    //                 <PaginationLink href={`/blog/${i === 0 ? '' : '' + (i+1)}`}>
    //                     {i + 1}
    //                 </PaginationLink>
    //             </PaginationItem>
    //             )
    //         )}
    //         {isLast ? (
    //             <PaginationItem disabled></PaginationItem>
    //         ):(
    //             <PaginationItem>
    //                 <PaginationLink next href={nextPage}/>
    //             </PaginationItem>
    //         )}
    //     </Pagination>
    // )

    return(
        <div className={styles.wrapper}>
            {
                isFirst ? (
                    <GoChevronLeft disabled className={styles.icon1}/>
                ) : (
                    <a  previous href={previousPage}>
                    <GoChevronLeft className={styles.icon1}></GoChevronLeft>
                    </a>
                )
            }
            {Array.from({ length: numberOfPages}, (_, i) => 
                currentPage === i + 1 ? (
                <span active key={`page-number${i + 1}`}>
                    <a href={`/blog/${i === 0 ? '' : '' + (i+1)}`}>
                        {i + 1}
                    </a>
                </span>
                ):(
                <span key={`page-number${i + 1}`}>
                    <a href={`/blog/${i === 0 ? '' : '' + (i+1)}`}>
                        {i + 1}
                    </a>
                </span>
                )
            )}
            {isLast ? (
                <GoChevronRight disabled className={styles.icon2}></GoChevronRight>
            ):(
                <a next href={nextPage}>
                <GoChevronRight className={styles.icon2}>
                    
                </GoChevronRight>
                </a>
            )}
        </div>
    )
}

export default PaginationLinks