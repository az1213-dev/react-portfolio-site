import data from "../../data/index.json";

export default function MyPortfolio() {
	return (
		<section className="portfolio--section" id="MyPortfolio">
			<div className="portfolio--container-box">
				<div className="portfolio--container">
					<p className="sub--title">Recent Projects</p>
					<h2 className="section--heading">My Portfolio</h2>
				</div>
				<div>
					<a
						href="https://github.com/az1213-dev"
						target="_blank"
						rel="noreferrer"
						className="btn btn-github"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
							/>
						</svg>
						Visit My GitHub
					</a>
				</div>
			</div>
			<div className="portfolio--section--container">
				{data?.portfolio?.map((item, index) => (
					<div key={index} className="portfolio--section--card">
						<div className="portfolio--section--card--top">
							<div className="portfolio--section--img">
								<img src={item.src} alt={item.title} />
							</div>
							<div className="portfolio--section--card--content">
								<h3 className="portfolio--section--title">{item.title}</h3>
								<p className="text-md">{item.description}</p>
							</div>
						</div>
						<a
							href={`https://${item.link}`}
							target="_blank"
							rel="noreferrer"
							className="text-sm portfolio--link"
						>
							{item.link}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 20 19"
								fill="none"
							>
								<path
									d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
									stroke="currentColor"
									strokeWidth="2.66667"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</a>
					</div>
				))}
			</div>
		</section>
	);
}