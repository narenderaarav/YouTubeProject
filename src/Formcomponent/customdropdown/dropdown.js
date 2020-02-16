import React, {Component} from "react";
import {DropDownListItem} from "./dropdownListItem";
import './customdropdown.css';



export class NewDropDown extends Component {
  state = {
    isOpen: false
  };
  toggleIsOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  // handle click outside ~ to close the dropdown
  componentWillMount() {
    document.addEventListener("mousedown", this.handleDocClick, false);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleDocClick, false);
  }
  handleDocClick = e => {
    if (!this.wrapper.contains(e.target)) {
      this.setState({
        isOpen: false
      });
    }
  };
  renderDropDownIcon = () => {
    if (this.props.customRenderDropDownIcon) {
      return this.props.customRenderDropDownIcon();
    } else {
      return <span className="drop-down-icon">▼</span>;
    }
  };
  renderSelected = () => {
    const { isOpen } = this.state;
    const { selected, data, uniqueKey } = this.props;
    let labelContent = "";
    if (!selected.length) {
      labelContent = "None Selected";
    } else if (selected.length === data.length) {
      labelContent = "All Selected";
    } else if (selected.length === 1) {
      const selectedOne = data.find(item => item[uniqueKey] === selected[0]);
      labelContent = selectedOne.label;
    } else {
      labelContent = `${selected.length} Selected`;
    }
    const activeClass = isOpen ? "new-drop-down--is-open" : "";
    return (
      <button
        className={`new-drop-down__button ${activeClass}`}
        onClick={this.toggleIsOpen}
      >
        <span>{labelContent}</span>
        {this.renderDropDownIcon()}
      </button>
    );
  };
  renderDropDownList = () => {
    const {
      data,
      toggleChangeListItem,
      uniqueKey,
      selected,
      shouldHaveSelectAll
    } = this.props;

    let data_ = [...data];

    if (shouldHaveSelectAll) {
      data_ = [{ label: "Select All", value: "ALL" }, ...data];
    }

    const getIsChecked = ({ listData, uniqueKey, selected }) => {
      let isChecked = false;
      if (listData[uniqueKey] === "ALL") {
        if (selected.length === data.length) {
          isChecked = true;
        } else {
          isChecked = false;
        }
      } else {
        isChecked = selected.indexOf(listData[uniqueKey]) > -1;
      }
      return isChecked;
    };

    return data_.map((listData, index) => {
      const isChecked = getIsChecked({ listData, uniqueKey, selected });
      return (
        <DropDownListItem
          key={index}
          toggleChangeListItem={toggleChangeListItem}
          listData={listData}
          uniqueKey={uniqueKey}
          isChecked={isChecked}
        />
      );
    });
  };
  render() {
    return (
      <div className="new-drop-down" ref={wrapper => (this.wrapper = wrapper)}>
        {this.renderSelected()}
        {this.state.isOpen && (
          <div className="new-drop-down__list-wrapper">
            {this.renderDropDownList()}
          </div>
        )}
      </div>
    );
  }
}


