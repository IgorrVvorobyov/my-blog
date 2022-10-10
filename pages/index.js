import React from "react";
import {
    BuyMeCoffee,
    Cover, Post, PostGrid,
    Section,
    SocialNetworks,
    Title
} from "../components";
import {loadPosts} from "./api/posts";


const LOAD_MORE_STEP = 4;

export default function Home({initialPosts, total}) {
    const [posts, setPosts] = React.useState(initialPosts);

    return (
        <div>
            <Section>
                <Cover title="Igor<br /> Vorobyov"/>
                <SocialNetworks/>
                <BuyMeCoffee/>
            </Section>
            <Section>
                <Title>New Post</Title>
                <PostGrid>
                    {posts.map((post) => (
                        <Post
                        key={post.slug.current}
                        {...post}
                        />
                    ))}
                </PostGrid>
            </Section>
        </div>
    )
}

export const getServerSideProps = async () => {
    const {posts, total} = await loadPosts(0, 4, LOAD_MORE_STEP);

    return {
        props: {
            initialPosts: posts,
            total,
        }
    }
}

