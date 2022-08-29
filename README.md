# Weather_tracker
final project in computer science degree

![data_pic1](https://user-images.githubusercontent.com/62143916/187169506-69a2b004-4ca0-49cb-9f5e-60480c90ea10.png)

![data_pic2](https://user-images.githubusercontent.com/62143916/187169526-f77566b4-895a-4101-8ec4-76fa75c1e02f.png)

# About
This project is designed to serve the observatory in Ariel University,
its purpose is to provide with data regarding the observatory,
such as current weather conditions.

# Technology
We have used the MERN stack,
using React as our front-end , Express and nodejs as our backend routes.
finaly our Database was mongoDB (atlas).

# Coding standards & design patterns
The project was used conventional javascript coding standards.
https://www.w3schools.com/js/js_conventions.asp

We have used the MERN architechure:
for client side:
- Using react redux to manage api calls.
- Each component has one part (SOC).
- Creating different layers.

for server side:
- using the model & controller (since view is client side).
- separating the backend into layers.

One of our main concerns was making the app as scalable as possible.

# Structure

The project was devided into microservices.
where this part of the project, simple interacts with the database(fetch, create).
while another microservice is incharge of updating DATABASE from external sources.


![project_str](https://user-images.githubusercontent.com/62143916/185386560-5fb5d849-2488-4891-a497-6fe9abbe3ae0.png)
