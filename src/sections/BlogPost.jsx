import "./BlogPost.css";

export default function BlogPost({ post, onBack }) {
  return (
    <section className="blogpost">
      <button className="blogpost-back" onClick={onBack}>
        ← back to blog
      </button>

      <div className="blogpost-header">
        <h1 className="blogpost-title">{post.title}</h1>
        <span className="blogpost-date">{post.date}</span>
        <div className="blogpost-tags">
          {post.tags.map((tag) => (
            <span key={tag} className="blogpost-tag">{tag}</span>
          ))}
        </div>
      </div>

      <div className="blogpost-content">
        {post.content.split("\n\n").map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </section>
  );
}