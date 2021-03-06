# IBMWP

![Macroinvertebrates](./src/images/Macroinvertebrates.png)

This is a **personal project** I'm currently working on. On this project I'm trying to integrate **Python** with **React** and **SCSS**.

The **BMWP**, or Biological Monitoring Working Party, is a procedure that measures **water quality** using the **macroinvertebrate families** as biological indicators. The **IBMWP** is a variant of the BMWP for the **Iberian Peninsula**.

## First feature: Dichotomous key

The dichotomous key serves to identify the different macroinvertebrate families. It consists of a series of card choices, and selecting one will take you to a different set of cards, until you reach your result.

I have created a **python server** for this purpose. The server only works in **localhost:4443** for the time being, you need to start it at /server => python3 server.py

Selecting a card triggers a fetch on the server, which responds with an object with the next cards or the result macroinvertebrate.

This feature includes:

1. **Key history:** when you select a card, it is stored on a list that you can click to go back to your previous choices.
2. **Reset button:** for restarting your search at any point.
3. **Loading** while waiting for server response.

## Future features:

Currently I'm working on a form to enter the macroinvertebrates found and calculate the index.

Next I'd like to introduce calculations for different samples, and statistic for them.

Future features I'd like to implement would be geolocation for the samples, being able to create a document with your data, and graphics for the statistic calculations.
