import Carousel from 'react-bootstrap/Carousel';

// Styles
import styles from './homescreen.module.scss';

// Components
import BlogPreview from '../../components/blog-preview/BlogPreview';
import SearchBar from '../../components/search/SearchBar';
import TopStoriesCard from '../../components/top-stories/TopStoriesCard';

// Sample data
import posts from '../../data/posts.json';

const TestExample = () => {
  return (
    <Carousel indicators={false}>
      <Carousel.Item>
        <TopStoriesCard />
      </Carousel.Item>
    </Carousel>
  );
};

function HomeScreen() {
  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <div className={styles.headingText}>
          <h2 className={styles.header}>Top Stories</h2>
          <h5 className={styles.subheader}>
            Find new, handpicked stories you'll love. Updated daily.
          </h5>
        </div>

        <SearchBar />
      </div>

      {/* TODO - Responsive top stories */}
      {/* Top Stories Component */}
      {/* <div className={styles.topStoriesContainer}>
        <BlogPreview />
        <BlogPreview />
      </div> */}

      {/* TODO - Implement masonry grid view */}
      <div className={styles.blogCardContainer}>
        {posts.map((post) => (
          <div key={post.id}>
            <BlogPreview
              post_image={post.post_image}
              title={post.title}
              excerpt={post.excerpt}
              category={post.category}
              created_at={post.created_at}
              publisher={post.publisher.name}
              publisher_id={post.publisher.id}
              profile_image={post.publisher.profile_image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;
