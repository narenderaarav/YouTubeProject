import React, {Component} from "react"
import {debounce} from "./util";

export class DropDownListItem extends Component {
  constructor(props) {
    super(props);
    this.debouncedToggleChangeListItem = debounce(
      this.toggleChangeListItem,
      100
    );
  }
  toggleChangeListItem = () => {
    const { listData, uniqueKey } = this.props;
    this.props.toggleChangeListItem(listData[uniqueKey]);
  };
  onKeyUp = e => {
    if (e.keyCode === 13) {
      const { listData, uniqueKey } = this.props;
      this.props.toggleChangeListItem(listData[uniqueKey]);
    }
  };
  render() {
    const { listData, isChecked } = this.props;
    const id = `${listData.label}__${listData.value}`;
    return (
      <div
        tabIndex={0}
        className="drop-down__list-item"
        onClick={this.debouncedToggleChangeListItem}
        onKeyUp={this.onKeyUp}
      >
        <input
          tabIndex={-1}
          id={id}
          type="checkbox"
          checked={isChecked}
          value={listData.value}
        />
        <label htmlFor={id}>{listData.label}</label>
      </div>
    );
  }
}