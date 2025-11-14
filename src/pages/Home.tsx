import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
// import { Input } from "../components/ui/input";
// import travelHero from "./../assets/a-woman-sits-on-a-rocky-cliff.jpg";
import ArticleList from "../components/ArticleList";
import Header from "../components/Header";
import { InfiniteSliderVertical } from "../components/InfiniteSlider";
// import { AnimatedGridPattern } from "../components/ui/animated-grid-pattern";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { RainbowButton } from "../components/ui/rainbow-button";
import { InteractiveGridPattern } from "../components/ui/interactive-grid-pattern";
import { AnimatedGridPattern } from "../components/ui/animated-grid-pattern";
import { AllCommentsMarquee } from "../components/AllCommentsMarquee";
import { SparklesText } from "../components/ui/sparkles-text";
import { useAuthDialog } from "../store/authDialogStore";
// import { DottedMap } from "../components/ui/dotted-map";
// import { NumberTicker } from "../components/ui/number-ticker";
// import { TextShimmer } from "../components/ui/text-shimmer";
// import BounceCards from "../components/BounceCards";
export default function Home() {
  const { openLogin } = useAuthDialog();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      {/* HERO */}
      <section className=" flex mx-auto mt-20 justify-between items-center gap-10 relative overflow-hidden">
        <AnimatedGridPattern className="z-0 h-svh min-w-screen absolute" />
        <InteractiveGridPattern className="z-0 h-svh  min-w-screen absolute" />
        <div className="w-full px-4 md:px-20 py-12 md:py-20 ">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                  Discover Your Next Adventure
                </h1>
                <p className="mt-4 text-muted-foreground max-w-prose">
                  In-depth travel articles, city guides and local tips from
                  writers around the world. Find inspiration and plan your next
                  adventure.
                </p>

                <RainbowButton
                  onClick={() => navigate("/articles")}
                  className="mt-6"
                >
                  Start Exploring <ArrowRight className="ml-2" />
                </RainbowButton>
              </div>

              <div className="flex flex-wrap gap-2 items-center justify-center z-10">
                <Badge>Top picks</Badge>
                <Badge>Travel advice</Badge>
                <Badge>Budget</Badge>
                <Badge>Culture</Badge>
                <Badge>Destinations</Badge>
              </div>
            </div>

            <div className="flex justify-center items-center h-full min-h-96 md:min-h-full">
              <div className="w-full h-full max-w-md items-center justify-center ">
                <InfiniteSliderVertical />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 mt-5">
        <div className="flex justify-between px-4 md:px-6 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Highlighted Stories
            </h2>
            <p className="text-muted-foreground mt-1 items-left">
              Handpicked articles for you
            </p>
          </div>
          <div className="flex my-auto">
            <Button variant="link" className="text-md my-auto align-middle">
              <Link to="/articles">View all</Link>
            </Button>
          </div>
        </div>
        <ArticleList />
      </section>

      <section className="py-10 flex flex-col gap-15">
        <h2 className="text-4xl text-center font-bold tracking-tight sm:text-6xl">
          What Readers Are Saying
        </h2>
        <AllCommentsMarquee />
      </section>

      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-row gap-1 justify-center items-center">
            <SparklesText className="text-2xl">Write</SparklesText>
            <h3 className="text-2xl font-semibold ">for Reisen</h3>
          </div>
          <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
            Share your stories with a community of curious travelers. Submit
            articles, tips and photo essays.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <RainbowButton onClick={openLogin}>Start writing</RainbowButton>
            <Button variant="ghost" onClick={scrollToTop}>
              Learn more
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t">
        <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Reisen
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" size="sm">
              Privacy
            </Button>
            <Button variant="ghost" size="sm">
              Terms
            </Button>
          </div>
        </div>
      </footer>
    </main>
  );
}
