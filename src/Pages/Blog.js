import React, { useState, useEffect } from "react";
import axios from "axios";

const WordPressPage = () => {
  const [pageContent, setPageContent] = useState("");

  useEffect(() => {
    const fetchPageContent = async () => {
      try {
        const response = await axios.get(
          "https://com04808.wordpress.com/wp-json/wp/v2/pages/your-page-slug"
        );
        setPageContent(response.data.content.rendered);
      } catch (error) {
        console.error("Error fetching page content:", error);
      }
    };

    fetchPageContent();
  }, []);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: pageContent }} />
    </div>
  );
};

export default WordPressPage;
