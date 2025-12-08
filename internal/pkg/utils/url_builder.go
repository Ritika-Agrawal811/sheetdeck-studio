package utils

import "net/url"

type URLBuilder struct {
	baseURL string
	path    string
	params  url.Values
}

func NewURLBuilder(baseURL string, path string) *URLBuilder {
	return &URLBuilder{
		baseURL: baseURL,
		path:    path,
		params:  url.Values{},
	}
}

// AddParam adds a query parameter only if the value is not empty
func (b *URLBuilder) AddParam(key, value string) *URLBuilder {
	if value != "" {
		b.params.Set(key, value)
	}
	return b
}

// Build constructs and returns the final URL string
func (b *URLBuilder) Build() string {
	u, err := url.Parse(b.baseURL + b.path)
	if err != nil {
		// Fallback to simple concatenation if parsing fails
		return b.baseURL + b.path
	}

	u.RawQuery = b.params.Encode()
	return u.String()
}
