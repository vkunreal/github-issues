# GitHub Issues

### `yarn`

Runs installing dependencies

### `yarn start`

Runs the app in the ready mode.\
Server would open on adress [http://localhost:5000](http://localhost:5000).

### `yarn run dev`

Runs the app in the development mode.\
Server would open on adress [http://localhost:5000](http://localhost:5000).

# Routes

### GET `/api/issues/{user_name}/{repo}`

Returns all issues from repository

### GET `/api/issues/{user_name}/{repo}/{id}`

Returns one issue from repository by id

### GET `/api/issues/sorted/{user_name}/{repo}/{sort}`

Returns sorted issues from repository

### `String` {user_name} - user name

### `String` {repo} - repository name

### `String` {sort} - sort type (created|updated|comments)
