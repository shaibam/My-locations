import React, { Component } from "react";

class Instructions extends Component {
  render() {
    return (
      <p>
        The user can manage (view, add, remove and edit) the list of Categories.
        <br />
        The user can manage (view, add, remove and edit) the list of Locations.
        <br />
        The user must fill all properties when saving an item.
        <br />
        The user must choose a category from a list of existing categories when
        defining a Location. <br />
        Each screen has a top toolbar with title and action buttons. The user
        executes an operation on a list item by clicking the appropriate button
        in the top toolbar.
        <br />
        The application screen has a bottom bar with two iconic buttons:
        Categories and Locations. The user moves between Categories and Location
        management by clicking on their respective icons on the bottom button
        bar. <br />
        The user can view all Locations sorted by alphabetical order, grouped or
        ungrouped by category.
        <br />
        The user can view only the locations assigned a specific category she
        chooses.
        <br />
        When clicking a location on the list, the user can choose to see the
        properties of the item or view it on an actual map (using google maps or
        similar service).
        <br />
        When the user clicks on a location, the device will vibrate (via native
        bridge support).
        <br />
        allow selecting the coordinates from the map service and not entering by
        hand.
        <br />
        allow relating multiple categories to a single item, define and enhance
        the use cases and ui related to this.
      </p>
    );
  }
}

export default Instructions;
