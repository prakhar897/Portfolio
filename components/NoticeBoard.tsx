const NoticeBoard = () => {
	return (
		<div className="notice-board">
			<span className="notice-icon">📢</span>
			<p className="notice-text">
				<span className="notice-label">LATEST WORK:</span>
				<a
					href="/blog/a-guide-to-reducing-cognitive-load"
					target="_blank"
					rel="noopener noreferrer"
				>
					A Guide to Reducing Cognitive Load
				</a>
			</p>
		</div>
	);
};

export default NoticeBoard;
