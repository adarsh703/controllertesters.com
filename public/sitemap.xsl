<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xhtml="http://www.w3.org/1999/xhtml"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap | ControllerTesters.com</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            font-size: 14px;
            color: #333;
            max-width: 1000px;
            margin: 0 auto;
            padding: 2rem;
            background: #f9f9f9;
          }
          h1 {
            font-weight: 700;
            font-size: 24px;
            margin-bottom: 0.5rem;
            color: #111;
          }
          p.expl {
            color: #666;
            margin-bottom: 2rem;
          }
          table {
            border: none;
            border-collapse: collapse;
            width: 100%;
            background: #fff;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            border-radius: 8px;
            overflow: hidden;
          }
          th {
            text-align: left;
            padding: 1rem;
            font-weight: 600;
            color: #555;
            background: #f1f1f1;
            border-bottom: 2px solid #ddd;
          }
          td {
            padding: 0.75rem 1rem;
            border-bottom: 1px solid #eee;
          }
          tr:hover td {
            background-color: #fdfdfd;
          }
          a {
            color: #0066cc;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
          .lang-count {
            font-size: 11px;
            background: #eef;
            padding: 2px 6px;
            border-radius: 12px;
            color: #44a;
          }
        </style>
      </head>
      <body>
        <h1>XML Sitemap</h1>
        <p class="expl">
          This is an XML Sitemap, designed to be processed by search engines like Google and Bing.<br/>
          It contains <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></strong> URLs.
        </p>
        <table cellpadding="3">
          <thead>
            <tr>
              <th width="65%">URL</th>
              <th width="10%">Locales</th>
              <th width="10%">Priority</th>
              <th width="15%">Last Modified</th>
            </tr>
          </thead>
          <tbody>
            <xsl:for-each select="sitemap:urlset/sitemap:url">
              <tr>
                <td>
                  <xsl:variable name="itemURL">
                    <xsl:value-of select="sitemap:loc"/>
                  </xsl:variable>
                  <a href="{$itemURL}">
                    <xsl:value-of select="sitemap:loc"/>
                  </a>
                </td>
                <td>
                  <span class="lang-count"><xsl:value-of select="count(xhtml:link)"/> alternate</span>
                </td>
                <td>
                  <xsl:value-of select="sitemap:priority"/>
                </td>
                <td>
                  <xsl:value-of select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))"/>
                  <xsl:value-of select="sitemap:lastmod"/>
                </td>
              </tr>
            </xsl:for-each>
          </tbody>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
