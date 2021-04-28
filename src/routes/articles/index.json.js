import posts from './_posts';

const articles = JSON.stringify(
	posts.map((post) => {
		return {
			title: post.title,
			slug: post.slug
		};
	})
);

export async function get() {
	return {
		body: {
			articles
		}
	};
}
