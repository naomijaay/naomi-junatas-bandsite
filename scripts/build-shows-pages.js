const shows = [
    {
        date: "Mon Sept 09 2024",
        venue: "Ronald Lane",
        location: "San Francisco, CA",
    },

    {
        date: "Tue Sept 17 2024",
        venue: "Pier 3 East",
        location: "San Francisco, CA",
    },

    {
        date: "Sat Oct 12 2024",
        venue: "View Lounge",
        location: "San Francisco, CA",
    },

    {
        date: "Sat Nov 16 2024",
        venue: "Hyatt Agency",
        location: "San Francisco, CA",
    },

    {
        date: "Fri Nov 29 2024",
        venue: "Moscow Center",
        location: "San Francisco, CA",
    },

    {
        date: "Wed Dec 18 2024",
        venue: "Press Club",
        location: "San Francisco, CA",
    },

];

function createLabelElement (labelText, labelTextContent) {
    const labelElement = document.createElement("div");
    labelElement.textContent = labelText;
    labelElement.classList.add("shows__item__label");

    const contentElement = document.createElement("div");
    contenetElement.textContent = labelTextContent;
    contentElement.classList.add("shows__item__text");

    labelElement.appendChild(contentElement);
    return labelElement;
}