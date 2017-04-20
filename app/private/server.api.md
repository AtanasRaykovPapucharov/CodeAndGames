## Server routes

### Users

* `api/users`
  * GET
    * **Returns** all users
  * POST
    * **Registers** a new user
    * Needs **username** and **passHash** to be sent in the body of the request
* `api/auth`
  * PUT
    * **Logs in** an user
    * Needs **username** and **passHash** to be sent in the body of the request
	* If the request is valid returns **username** and **authKey**

### Blog

* `api/blogs`
  * GET
    * **Returns** all shared fortune cookies
  * POST
    * **Shares** or **re-shares** a new fortune cookie
	* User must be **logged-in**
    * Needs **text**, **category**, **img** to be sent in the body of the request and the current user's **authKey** as a header with name: `x-auth-key`
      * `img` is a string to an online image
      * `img` is optional and if not sent, a **default batman** image will be provided
* `api/blogs/:id`
  * PUT
    * **Likes** or **dislikes** a fortune cookie
    * Needs `type` to be sent in the body of the request
      * `type` can only have values 'like' or 'dislike'

###	My Blog

* `api/my-blog`
  * GET
    * **Returns** the hourly fortune cookie

###	Categories
*	`api/categories`
	*	GET
		*	**Returns** an array with all categories

###	Games

* `api/games`
  * GET
    * **Returns** the hourly fortune cookie
