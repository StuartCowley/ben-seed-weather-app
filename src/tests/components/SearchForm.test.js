import React from "react";
import { render } from "@testing-library/react";
import SearchForm from "../../components/SearchForm";

describe("SearchForm", () => {
  const validProps = {
    searchText: "Manchester",
    onSubmit: () => {},
    setSearchText: () => {},
  };

  describe("SearchForm-snapshot", () => {
    it("renders button correctly", () => {
      const { asFragment } = render(
        <SearchForm
          searchText={validProps.searchText}
          onSubmit={validProps.onSubmit}
          setSearchText={validProps.setSearchText}
        />
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
