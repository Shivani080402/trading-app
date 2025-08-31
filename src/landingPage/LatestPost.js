import React from "react";

// Reusable Post component for cleaner rendering
const Post = ({ post }) => (
  <div className="mb-5">
    <p className="text-muted " style={{ fontSize: "14px", lineHeight : '1px' }}>
      {post.date}
    </p>
    <p className="fs-6 fw-bold">{post.title}</p>
    <p className="text-muted" style={{ fontSize: "14px" }}>
      {post.description}
    </p>
    <a href='/' style={{ color: "#459245", fontSize: "14px" }}>
      Read Full post
    </a>
  </div>
);

function LatestPost() {
  // Combined array of all posts
  const posts = [
    {
      date: "Apr 18, 2024",
      title: "CM Fixed Income: Exiting Banking & PSU to Add a New Gilt Fund",
      description:
        "We are increasing the duration of our Fixed Income portfolio to reflect the current macro conditions. We want to take advantage of the current higher rates to further increase the duration of the Gilt funds we hold. Read more...",
    },
    {
      date: "Apr 03, 2024",
      title: "The Focused Way of Investing: Our Four-Quadrant Strategy and FY24 Review",
      description:
        "FY24 brought us a 42% gain in our Capitalmind Focused portfolio, gently outperforming the Nifty’s 29%. It’s been a bit of a rollercoaster, especially these last few months, but that’s part of the equity investing. It’s like having a compass...",
    },
    {
      date: "Mar 25, 2024",
      title: "Poonawalla Fincorp: One right step at a time",
      description:
        "There are some winning patterns in investing that keep repeating. One such pattern is when a big company buys a struggling company, fixes old problems, and brings in new leaders to grow the business. This way has often led to...",
    },
    {
      date: "Apr 05, 2024",
      title: "Craftsman Automation: Poised for Growth Amid Temporary Headwinds",
      description:
        "Unlock this post by trail. Craftsman Automation excels in making precise parts for cars and machines. Amidst temporary headwinds, looks resilient with a focus on growth and innovation....",
    },
    {
      date: "Mar 27, 2024",
      title: "A Small CAD for India, Yet Again",
      description:
        "Yet again, India's Current Account Deficit is a mere 10 bn in the quarter (Dec 2023), less than levels more than a decade back, and less than 2017-18 too. Why net of gold? It’s not really a current account import...",
    },
    {
      date: "Mar 18, 2024",
      title: "CM Focused: Reducing our allocation to smallcaps & increasing cash",
      description:
        "In the last few days, we have seen increased volatility in the mid and small-cap sector due to regulatory actions, including restrictions on inflows into mid and...",
    },
  ];

  const leftposts = posts.slice(0, 3);
  const rightposts = posts.slice(3, 6);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10 ">
          <div className="row mt-3 mb-3">
            <h6>Latest Posts</h6>
          </div>
          <div className="row ">
            <div className="col-6 ">
              {leftposts.map((post, index) => (
                <Post key={index} post={post} />
              ))}
            </div>
            <div className="col-6 ">
              {rightposts.map((post, index) => (
                <Post key={index} post={post} />
              ))}
            </div>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default LatestPost;
