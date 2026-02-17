import Link from "next/link";

const NoticeBoard = () => {
	return (
		<div className="notice-board">
			<span className="notice-icon">📢</span>
			<p className="notice-text">
				<span className="notice-label">NOTICE:</span> Latest work -{" "}
				<a href="/blog/doing-the-thing-is-doing-the-thing">
					Doing the thing is doing the thing
				</a>
			</p>
		</div>
	);
};

export default NoticeBoard;
