import Link from "next/link";
import React from "react";
import Container from "../../Common/Container";
import Click from "../../Common/Icons/Click";
import RecentProject from "./RecentProject";

interface Props {}

const RecentProjects = ({}: Props) => {
  return (
    <section className="my-20">
      <Container>
        <h2 className="text-3xl font-bold mb-6">Recent Projects</h2>
        <div className="flex flex-col gap-10">
          <RecentProject
            className="bracker-project"
            title="Bracker"
            url="https://bracker.ir/"
            github="https://github.com/Arsh1a/Bracker/"
            description={
              <p>
                A powerful open source bug tracking system that helps you manage and deal with bugs
                <br />
                easier and deliver great products on time.
              </p>
            }
          />
          <RecentProject
            className="crypto-project"
            title="Crypto Notifier"
            url="https://arsh1a.github.io/crypto-notifier/"
            github="https://github.com/Arsh1a/crypto-notifier"
            description={
              <p>
                Notify the user when a cryptocurrency price goes 🚀 by the defined <br />
                percentage using Cryptocompare.com API.
              </p>
            }
          />
        </div>
        <Link href="/projects" passHref>
          <span className="text-md flex gap-2 items-center justify-center mt-5 cursor-pointer hover:opacity-70 transition duration-300">
            More Projects <Click height={15} width={15} />
          </span>
        </Link>
      </Container>
    </section>
  );
};
export default RecentProjects;
