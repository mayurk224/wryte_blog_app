
# Wryte - Blog Application

Wryte is a modern, full-featured blog application built with Next.js 16, Convex, and Tailwind CSS. It provides users with a seamless platform to create, share, and engage with blog content through an intuitive and responsive interface.

## 🚀 Features

- **User Authentication**: Secure sign-up and login functionality with email/password support
- **Blog Creation**: Intuitive form for creating new blog posts with title, body, and image upload
- **Blog Reading**: Clean, engaging reading experience for published content
- **Comments System**: Interactive comment section for user engagement
- **Real-time Presence**: See who else is reading a post in real-time
- **Responsive Design**: Mobile-first responsive UI that works across all devices
- **Dark/Light Theme**: Built-in theme toggle for user preference
- **Social Sharing**: Easy sharing options for blog posts
- **Search Functionality**: Find articles quickly with search capabilities
- **Tagging System**: Organize content with tags and categories

## 🛠️ Technologies Used

- **Frontend**: [Next.js 16](https://nextjs.org/) (App Router)
- **Backend**: [Convex](https://convex.dev/) (Real-time database and functions)
- **Authentication**: [Better Auth](https://better-auth.com/) with Convex integration
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom components
- **UI Components**: Custom-built components with Radix UI primitives
- **Icons**: [Lucide React](https://lucide.dev/)
- **Form Handling**: React Hook Form with Zod validation
- **State Management**: Convex React hooks
- **Type Safety**: TypeScript
- **Build Tool**: Vite-compatible Next.js build system

## 📋 Prerequisites

- Node.js (version 18 or higher)
- pnpm package manager
- Convex account for backend services

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd wryte_blog_app
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up Convex**
   - Create an account at [Convex](https://convex.dev/)
   - Create a new application in your Convex dashboard
   - Install the Convex CLI: `npm install -g convex`
   - Initialize your Convex project: `convex dev`
   - Add your Convex environment variables to `.env.local`

4. **Environment Variables**
   Create a `.env.local` file in the root directory with the following variables:
   ```env
   NEXT_PUBLIC_CONVEX_URL=<your-convex-url>
   CONVEX_DEPLOYMENT=<your-deployment>
   CONVEX_SITE_URL=<your-site-url>
   ```

5. **Run the development server**
   ```bash
   pnpm dev
   ```

6. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000) to see the application

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── (shared-layout)/    # Shared layout components
│   ├── api/                # API routes
│   ├── auth/               # Authentication pages
│   ├── schemas/            # Zod validation schemas
│   └── actions.ts          # Server actions
├── components/             # Reusable UI components
│   ├── ui/                 # Base UI components
│   └── web/                # Application-specific components
├── convex/                 # Convex backend functions
│   ├── _generated/         # Auto-generated Convex types
│   ├── posts.ts            # Blog post operations
│   ├── comments.ts         # Comment operations
│   ├── auth.ts             # Authentication setup
│   └── schema.ts           # Database schema
├── lib/                    # Utility functions
└── public/                 # Static assets
```

## 🧩 Key Components

- **Navbar**: Navigation with authentication state and theme toggle
- **BlogCard**: Display component for blog posts with image, title, and excerpt
- **CommentSection**: Interactive comment system with real-time updates
- **PostPresence**: Real-time presence indicator showing active readers
- **LoginForm/SignupForm**: Authentication forms with validation
- **SearchInput**: Search functionality for finding blog posts

## 🔐 Authentication

The application uses Better Auth with Convex integration for secure authentication. Users can:
- Sign up with email and password
- Log in securely
- Access protected routes and features
- Log out when finished

## 📝 Blogging Features

- **Create Posts**: Authenticated users can create new blog posts with title, body, and image upload
- **View Posts**: Clean, readable interface for consuming blog content
- **Comment System**: Engage with content through comments
- **Social Sharing**: Share posts across various platforms
- **Reading Time**: Estimated reading time for each post

## 📊 Database Schema

The application uses Convex with the following main collections:

- **posts**: Stores blog post data (title, body, image, author, creation time)
- **comments**: Stores comments linked to posts and users
- **users**: User account information
- **_storage**: File storage for uploaded images

## 🧪 Running Tests

Coming soon - tests will be added to ensure code quality and functionality.

## 🚀 Deployment

### Vercel

The easiest way to deploy this application is to use [Vercel](https://vercel.com), the creators of Next.js:

1. Push your code to a Git repository
2. Import your project into Vercel
3. Add your environment variables in the Vercel dashboard
4. Deploy!

### Other Platforms

This application can be deployed on any platform that supports Next.js applications. Just ensure your environment variables are properly configured.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## 🐛 Issues

If you encounter any issues or have feature requests, please open an issue in the repository.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Convex](https://convex.dev/) for the real-time backend
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Better Auth](https://better-auth.com/) for the authentication solution
- [Lucide](https://lucide.dev/) for the beautiful icons

---

Built with ❤️ using Next.js, Convex, and Tailwind CSS.
