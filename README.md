# Ip-Cortex Assessment

### Problem solving notes 
- The problem specification clearly describes the need for a path finding algorithm
  (such as Dijkstra/A*/Travelling Salesperson)
- The graph is specified as being doubly weighted, with one weight representing cost 
and the other representing traffic
- Three main constraints to consider when solving the problem
    - User must find a path that is within their total cost limit
    - A complete route must incorporate a users sub-route (if defined)
    - Route must satisfy above constraints to be viable but must also have the lowest 
  traffic cost to be optimal
- Approach would be to find all viable routes for each user and then to output the route with
the lowest total traffic cost 

### API Design
- This is an API that a user would authenticate themselves into and use, so the only
endpoint of interest is the Routes endpoint (users endpoint would be an admin level, which can be 
created, but would have to have a permission guard - be implemented as an admin API)
    - GET all routes defined for user 
    - GET route by ID
    - PUT/PATCH Route to update 
    - POST to create a new route
    - DELETE to delete a route
- The 5 users that are expected to be created will first exist as mock data to output mock routes
but then should be migrated to a database
- TDD should focus on ensuring that all of these endpoints are working
- Document the API with Swagger