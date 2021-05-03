import { Repo } from '../../_db';

const addRepo = async (repo) => {
	let result = await Repo.findById(repo.id);
	if (result == null) {
		let newRepo = new Repo({
			_id: repo.id,
			name: repo.name,
			url: repo.url
		});
		return newRepo.save().catch(function (err) {
			console.error(err);
		});
	} else {
		return result;
	}
};

export { addRepo };
