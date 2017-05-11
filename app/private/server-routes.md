## Server routes:

### Users

* `api/users`
  * POST
    * **Registers** a new user
    * Needs **email**, **username** and **passHash** to be sent in the body of the request
  * PUT
    * **Logs in** an user
    * Needs **email** and **passHash** to be sent in the body of the request
    * If the request is valid returns **user**
* `api/users/contact-us`
  * POST
    * Needs **email**, **subject** and **message** to be sent in the body 
* `api/users/image`
  * PUT
    * Needs uploaded **image avatar url** to be sent in the body
    * User must be **logged-in**
* `api/users/change-password`
  * PUT
    * Needs **email**, **old password** and **new password** to be sent in the body 
* `api/users/forgot-password`
  * PUT
    * Needs **email** to be sent in the body

### Blog

* `api/blog`
  * GET
    * **Returns** all blogs
  * POST
    * **New blog post** 
	* User must be **logged-in**
* `api/blog/:id`
  * GET
    * **Returns** a blog post with current 'id'
* `api/blog/:tag`
  * GET
    * **Returns** all blogs with current 'tag'
* `api/blog/comment/:id`
  * PUT
    * **Push** a comment in a blog post with current 'id'
    * Needs **comment**, **username** and **date** to be sent in the body 
    * User must be **logged-in**

###	Games

* `api/games`
  * GET
    * **Returns** all games
  * POST
    * **New game** 
	* User must be **logged-in**
* `api/games/:id`
  * GET
    * **Returns** a game with current 'id'
* `api/games/:tag`
  * GET
    * **Returns** all games with current 'tag'
* `api/games/comment/:id`
  * PUT
    * **Push** a comment in a game with current 'id'
    * Needs **comment**, **username** and **date** to be sent in the body 
    * User must be **logged-in**

###	Tags
*	`api/tags`
	*	GET
		*	**Returns** an object with games, blog and all tags