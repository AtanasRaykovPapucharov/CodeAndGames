const gameModel = (() => {
	return (newGame, validator) => {
		class GameModel {
			constructor(newGame) {
				this.role = 'blog';
				this.title = newGame.title || '';
				this.image = newGame.img || '';
				this.link = newGame.link || '';
				this.description = newGame.description || [];
				this.tags = newGame.tags || [];
				this.user = newGame.user || 'admin';
				this.likes = newGame.likes || 0;
				this.comments = newGame.comments || [];
				this.date = new Date();
			}

			get gameObject() {
				return {
					role: this.role,
					title: this.title,
					image: this.title,
					link: this.link,
					description: this.description,
					tags: this.tags || [],
					author: this.user,
					comments: this.comments,
					likes: this.likes,
					date: this.date
				}
			}

			addComment(comment) {
				if (comment) {
					this.comments.push(comment);
				}
				return this;
			};
		}

		let newModel = new GameModel(newGame);
		return newModel
	}
})()

export { gameModel }