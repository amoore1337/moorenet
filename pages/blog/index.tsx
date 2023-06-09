import { ArticleLink } from "@/components/blog/ArticleLink";
import howReactWorks from "@/components/blog/icons/howReactWorks.jpg";
import Image from "next/image";

export default function Blog() {
  return (
    <div className="mx-[10vw] py-16">
      <div className="max-w-7xl grid grid-cols-12 gap-x-6">
        <div className="col-span-full md:col-span-5 flex flex-col items-center">
          <h2 className="text-2xl font-semibold flex items-center relative">
            Blog
          </h2>

          <p className="w-full text-xl text-center my-4">
            I love sharing what I&apos;ve learned with others. Writing articles
            is a rewarding way to solidify my own understanding on a subject and
            provide a referenceable resource for others.
          </p>
        </div>
        <div className="col-span-full md:col-span-7 flex flex-col items-center pt-6 gap-4">
          <ArticleLink
            articleTitle="What Does React Actually Do?"
            articleDescription="A deeper look at how React works under the hood."
            link="https://betterprogramming.pub/what-does-react-actually-do-c9412c08bfe6"
            icon={
              <Image
                src={howReactWorks}
                width={70}
                height={60}
                alt="Article Icon"
              />
            }
          />
        </div>
      </div>
    </div>
  );
}
