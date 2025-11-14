import { useComments } from "../hooks/useComments";
import { Marquee } from "./ui/marquee";
import { CommentCard } from "./CommentCard";

const fakeUsers = [
  { name: "Alex", username: "@alex", img: "https://avatar.vercel.sh/alex" },
  { name: "Sarah", username: "@sarah", img: "https://avatar.vercel.sh/sarah" },
  { name: "Mike", username: "@mike", img: "https://avatar.vercel.sh/mike" },
  { name: "Emma", username: "@emma", img: "https://avatar.vercel.sh/emma" },
  { name: "Jack", username: "@jack", img: "https://avatar.vercel.sh/jack" },
  { name: "Jill", username: "@jill", img: "https://avatar.vercel.sh/jill" },
  { name: "John", username: "@john", img: "https://avatar.vercel.sh/john" },
  { name: "Jane", username: "@jane", img: "https://avatar.vercel.sh/jane" },
  { name: "Jenny", username: "@jenny", img: "https://avatar.vercel.sh/jenny" },
  { name: "James", username: "@james", img: "https://avatar.vercel.sh/james" },
];

const ANONYMOUS = {
  name: "Anonymous",
  username: "@anonymous",
  img: "https://avatar.vercel.sh/anonymous",
};

export function AllCommentsMarquee() {
  const { data, isLoading, isError } = useComments();
  const apiComments = data?.data || [];

  if (isLoading || isError || apiComments.length === 0) {
    const firstRow = fakeUsers.slice(0, 5);
    const secondRow = fakeUsers.slice(5, 10);

    return (
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((u) => (
            <CommentCard key={u.username} {...u} body="Loading..." />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((u) => (
            <CommentCard key={u.username} {...u} body="Please wait..." />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
    );
  }

  const enrichedComments = apiComments.map((comment, index) => {
    if (index < fakeUsers.length) {
      const user = fakeUsers[index];
      return { ...user, body: comment.content };
    }
    return { ...ANONYMOUS, body: comment.content };
  });

  // Split jadi 2 baris
  const mid = Math.ceil(enrichedComments.length / 2);
  const firstRow = enrichedComments.slice(0, mid);
  const secondRow = enrichedComments.slice(mid);

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:40s]">
        {firstRow.map((review, idx) => (
          <CommentCard
            key={`first-${review.username}-${idx}`}
            img={review.img}
            name={review.name}
            username={review.username}
            body={review.body}
          />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:40s]">
        {secondRow.map((review, idx) => (
          <CommentCard
            key={`second-${review.username}-${idx}`}
            img={review.img}
            name={review.name}
            username={review.username}
            body={review.body}
          />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
