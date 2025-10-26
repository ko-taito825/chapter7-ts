import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../Styles/Detail.module.css";
import { Post } from "../types/post";

export default function Detail() {
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetcher = async () => {
      try {
        const res = await fetch(
          `https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${postId}`
        );
        const data = await res.json();
        setPost(data.post);
      } catch (error) {
        console.error("データの取得に失敗しました。", error);
      } finally {
        setLoading(false);
      }
    };
    fetcher();
  }, [postId]);

  if (loading) return <p>読み込み中...</p>;
  if (!post) return <p>記事が見つかりません</p>;
  return (
    <div className={styles.wrapper}>
      <img
        className={styles.detailImg}
        src={post.thumbnailUrl}
        alt={post.title}
      />
      <p>{new Date(post.createdAt).toLocaleDateString("ja-JP")}</p>
      <div className={styles.categoryItems}>
        {post.categories.map((category: string, catIndex: number) => (
          <span key={catIndex} className={styles.categoryItem}>
            {category}
          </span>
        ))}
      </div>
      <h2>APIで取得した{post.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}
