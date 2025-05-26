# Copilot Instructions for Cloudflare Worker Rathblog

This document provides guidance for AI assistants working with the Cloudflare Worker Rathblog project.

## Project Overview

This is a Cloudflare Worker project that handles edge functionality for Rathblog, including offline page handling and request processing at the edge. The project is built using Cloudflare Workers and is designed to enhance the blog's reliability and performance.

## Key Components

1. **offline-page.js**
   - Primary handler for serving offline content
   - Contains HTML template for the offline page
   - Uses Cloudflare Workers' fetch event handler pattern

2. **wrangler.toml**
   - Configuration file for Cloudflare Worker deployment
   - Contains environment settings and routing rules

## Development Guidelines

### General Principles

1. **Code Style**
   - Use modern JavaScript (ES6+) features
   - Implement async/await patterns for request handling
   - Maintain clean, well-documented code

2. **Worker Implementation**
   - Follow Cloudflare Workers best practices
   - Implement proper error handling
   - Use appropriate caching strategies
   - Consider edge cases in request handling

### Feature Implementation

When implementing new features:

1. **Request Handling**
   - Always use async/await with fetch events
   - Include appropriate error handling
   - Set proper Content-Type headers
   - Consider CORS implications

2. **Response Generation**
   - Use proper Response objects
   - Set appropriate headers
   - Consider caching strategies
   - Handle different content types appropriately

3. **Error Handling**
   - Implement graceful fallbacks
   - Provide user-friendly error messages
   - Log errors appropriately

## Testing Guidelines

1. **Local Testing**
   - Use `wrangler dev` for local development
   - Test offline functionality
   - Verify error scenarios

2. **Production Testing**
   - Ensure proper error page delivery
   - Verify caching behavior
   - Test network resilience

## Dependencies

- Node.js v12 or higher
- Wrangler CLI
- Cloudflare Workers runtime

## Configuration

When modifying configuration:

1. **wrangler.toml**
   - Maintain existing environment structure
   - Document any new variables
   - Consider security implications

2. **Environment Variables**
   - Use appropriate scoping
   - Document purpose and usage
   - Consider production vs development needs

## Deployment Considerations

1. **Before Deployment**
   - Verify all tests pass
   - Check configuration values
   - Review security implications

2. **Deployment Process**
   - Use `wrangler publish`
   - Verify successful deployment
   - Check logs for errors

## Security Guidelines

1. **Request Processing**
   - Validate input data
   - Implement appropriate CORS policies
   - Handle sensitive data carefully

2. **Response Headers**
   - Set appropriate security headers
   - Consider Content Security Policy
   - Implement HTTPS-only features

## Performance Considerations

1. **Edge Processing**
   - Minimize computation time
   - Optimize response sizes
   - Implement appropriate caching

2. **Resource Usage**
   - Consider Workers resource limits
   - Optimize memory usage
   - Monitor CPU usage

## Documentation Requirements

When making changes:
1. Update README.md for significant changes
2. Document any new configuration options
3. Include examples for new features
4. Update troubleshooting guides if needed

## Version Control

1. **Commit Messages**
   - Use clear, descriptive messages
   - Reference issues where applicable
   - Follow conventional commits format

2. **Branch Strategy**
   - Create feature branches from main
   - Use meaningful branch names
   - Clean up branches after merging

## Support and Maintenance

The project is maintained by Ian Rathbone and should align with the overall Rathblog ecosystem's requirements and standards.