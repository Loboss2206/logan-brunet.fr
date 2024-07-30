import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const Tag = ({ tagName, tagImage }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className="bg-gray-700 text-white px-2 py-1 rounded-lg flex items-center">
      <img src={tagImage} alt={tagName} className="w-6 h-6 mr-2" />
      {i18n.exists(`tags.${tagName.replaceAll(" ", "")}`)
        ? t(`tags.${tagName.replaceAll(" ", "")}`)
        : tagName}
    </div>
  );
};

Tag.propTypes = {
  tagName: PropTypes.string.isRequired,
  tagImage: PropTypes.string,
};

export default Tag;
