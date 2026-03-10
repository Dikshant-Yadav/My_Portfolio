import "./Blog.css";

const posts = [
  {
  id: 2,
  title: "Working with Kubernetes & Docker experience",
  date: "February 28, 2025",
  description: "How I built a production-style pipeline with Docker containers, Kubernetes orchestration, rolling updates, and canary traffic splitting — all running locally.",
  tags: ["Kubernetes", "Docker", "DevOps", "System Design"],
 content: `Docker packages your application into a container that runs identically everywhere. Kubernetes orchestrates those containers — deciding where they run, how many copies exist, and what happens when something fails. This project was my hands-on exploration of how the two work together in a real deployment pipeline.

The Docker image uses a multi-stage build on node:18-alpine. The application version is injected through environment variables at runtime, so the same image runs as v1, v2, or canary depending on what Kubernetes tells it to be.

Rolling updates were the first pattern I implemented. Setting maxUnavailable: 0 guarantees Kubernetes never kills an old pod until a healthy replacement is running and passing readiness checks. Zero interruption to live traffic on every deployment.

Canary deployments were the interesting part. Two deployments run simultaneously — stable and canary. NGINX Ingress splits traffic 80/20 between them using a weight annotation. Rolling back is one command — kubectl delete ingress ingress-canary — and 100% of traffic returns to stable instantly.

Liveness and readiness probes made the whole thing self-healing. The Horizontal Pod Autoscaler handled the rest, scaling replicas dynamically between 2 and 6 based on CPU load.

The biggest lesson — reliable systems are designed, not hoped for. Every probe and routing rule is a deliberate decision about what happens when things go wrong.`,},
  {
    id: 2,
    title: "Perfect Days — A Film About Finding Beauty in Routine",
    date: "March 2, 2025",
    description: "Wim Wenders' Perfect Days taught me that a meaningful life isn't built from grand achievements but from showing up fully to small, ordinary moments.",
    tags: ["Film", "Life", "Reflection"],
    content: `Perfect Days is a 2023 film by Wim Wenders about Hirayama, a Tokyo toilet cleaner who lives a life of deliberate simplicity. Every day he wakes before dawn, tends to his plants, drives to work listening to cassette tapes, eats alone, reads before sleeping. Repeat.

On the surface it sounds boring. But watching it I felt something shift.

Hirayama never complains. He never wishes he were somewhere else. He photographs the same trees every day because the light is always different. He finds the same music moving every single time.

The film made me realise how much of my own life I spend waiting and waiting to finish this semester, waiting to get a job, waiting for things to be different. Hirayama isn't waiting for anything. He is fully here.

The Japanese concept of komorebi , sunlight filtering through leaves , appears throughout the film. There is no English word for it. Maybe that's the point. Some things can only be felt, not explained.

As a CS student obsessed with building, optimising, and achieving, this film was a quiet reminder that the quality of ordinary days is the quality of your life. Not the highlights. The Tuesdays.`,
  },
];

export default function Blog({ onPostClick }) {
  return (
    <section className="blogs">
      <div className="section-header">
        <h2 className="section-title">Blog</h2>
        <p className="section-subtitle">Thoughts, guides and notes I have written.</p>
      </div>
      <div className="blog-list">
        {posts.map((post) => (
          <div key={post.id} className="blog-card" onClick={() => onPostClick(post)}>
            <div className="blog-top">
              <span className="blog-title">{post.title}</span>
              <span className="blog-date">{post.date}</span>
            </div>
            <p className="blog-desc">{post.description}</p>
            <div className="blog-tags">
              {post.tags.map((tag) => (
                <span key={tag} className="blog-tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}