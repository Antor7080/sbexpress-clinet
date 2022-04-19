import React, { useEffect, useState } from 'react';
import Header from '../../../pages/Header';

const AllNotice = () => {
    const [loading, setLoading] = useState(false)
    const [noticeData, setNoticeData] = useState([])
    const [pageCount, setPageCount] = useState(0);
    const Authorization = localStorage.getItem("token")
    const [page, setPage] = useState(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const config = {
        headers: {
            Authorization
        }
    };
    useEffect(() => {
        setLoading(true);
        fetch(`https://backend.sbexpressbd.com/notice?status=active&page=${page}`, config)
            .then(res => res.json())
            .then(data => {
                setNoticeData(data.data);
                const count = data.total;
                console.log(data.leng);
                const pageNumber = Math.ceil(count / 5);
                setPageCount(pageNumber);
                setLoading(false)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])

    console.log(noticeData);
    return (
        <div>
            <Header />
            <div className="content-wrapper">
                <section className="content">
                    <div className="container-fluid pt-3">
                        {
                            loading ? <div className="text-center">
                                <div class="spinner-border text-center text-danger" style={{ width: "13rem", height: '13rem' }} role="status">
                                    <span class="sr-only text-danger">Loading...</span>
                                </div>
                            </div> : <div class=" card table-responsive">
                                <table className="table table-bordered text-center">
                                    <thead style={{ backgroundColor: "#ededed" }}>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Notice</th>

                                            <th scope="col">Date</th>
                                            <th scope="col">Time</th>
                                            <th scope="col">Status</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {noticeData?.length === 0 && (
                                            <p className="text-danger text-center">No data found!</p>
                                        )}
                                        {noticeData && noticeData?.map((data) => (
                                            <tr key={data.id}>
                                                <td>{data.id}</td>
                                                <td>{data.notice}</td>

                                                <td>{new Date(data.updatedAt).toLocaleDateString("en-GB")}</td>
                                                <td>{new Date(data.updatedAt).toLocaleTimeString("en-GB")}</td>
                                                <td>{data.status}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <a
                                                type="button"
                                                onClick={() => setPage(page - 1)}
                                                className={
                                                    page === 1 ? "page-link btn disabled" : "page-link btn"
                                                }
                                                href
                                            >
                                                Previous
                                            </a>
                                        </li>

                                        {[...Array(pageCount).keys()].map((number) => (
                                            <li className="page-item" key={number}>
                                                <button
                                                    onClick={() => setPage(number + 1)}
                                                    className={
                                                        page === number + 1
                                                            ? " btn pagination-btn btn-success"
                                                            : "page-link btn pagination-btn"
                                                    }
                                                >
                                                    {number + 1}
                                                </button>
                                            </li>
                                        ))}

                                        <li className="page-item">
                                            <a
                                                onClick={() => setPage(page + 1)}
                                                className={
                                                    page === pageCount
                                                        ? "page-link btn disabled"
                                                        : "page-link btn"
                                                }
                                                href
                                            >
                                                Next
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        }
                    </div>
                </section>
            </div>

        </div>
    );
};

export default AllNotice;