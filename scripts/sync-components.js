#!/usr/bin/env node
/**
 * 组件同步脚本
 * 用于更新所有HTML文件中的导航栏和页脚，保持统一性
 */

const fs = require('fs');
const path = require('path');
const { NavbarHTML, FooterHTML, CommonHead } = require('../components/html-components');

// HTML文件配置
const HTML_FILES = [
  { 
    path: 'index.html', 
    title: 'iogame.best - Best Free IO Games',
    description: 'Play the best free IO games online! Smash Karts, Krunker.io, Deadshot and more. No download, instant fun.',
    currentPath: '/'
  },
  { 
    path: 'aboutus.html', 
    title: 'About Us | iogame.best',
    description: 'Learn more about iogame.best, the best place to play hundreds of free .io games online.',
    currentPath: '/aboutus.html'
  },
  { 
    path: 'contactus.html', 
    title: 'Contact Us | iogame.best',
    description: 'Get in touch with iogame.best team for support, feedback, or game suggestions.',
    currentPath: '/contactus.html'
  },
  { 
    path: 'faq.html', 
    title: 'FAQ | iogame.best',
    description: 'Frequently asked questions about iogame.best and our free IO games collection.',
    currentPath: '/faq.html'
  },
  { 
    path: 'privacy-policy.html', 
    title: 'Privacy Policy | iogame.best',
    description: 'Privacy policy and data protection information for iogame.best users.',
    currentPath: '/privacy-policy.html'
  },
  { 
    path: 'term-of-use.html', 
    title: 'Terms of Use | iogame.best',
    description: 'Terms of use and service conditions for iogame.best platform.',
    currentPath: '/term-of-use.html'
  }
];

/**
 * 更新HTML文件的组件
 * @param {string} filePath - HTML文件路径
 * @param {string} title - 页面标题
 * @param {string} description - 页面描述
 * @param {string} currentPath - 当前页面路径
 */
function updateHTMLComponents(filePath, title, description, currentPath) {
  const fullPath = path.join(__dirname, '..', filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`⚠️  文件不存在: ${filePath}`);
    return;
  }

  try {
    let content = fs.readFileSync(fullPath, 'utf8');

    // 更新head标签
    const headRegex = /<head[^>]*>[\s\S]*?<\/head>/i;
    const newHead = CommonHead(title, description);
    if (headRegex.test(content)) {
      content = content.replace(headRegex, newHead);
      console.log(`✅ 更新了 ${filePath} 的 <head> 标签`);
    }

    // 更新导航栏
    const headerRegex = /<header[^>]*>[\s\S]*?<\/header>/i;
    const newNavbar = NavbarHTML(currentPath);
    if (headerRegex.test(content)) {
      content = content.replace(headerRegex, newNavbar);
      console.log(`✅ 更新了 ${filePath} 的导航栏`);
    }

    // 更新页脚
    const footerRegex = /<footer[^>]*>[\s\S]*?<\/footer>/i;
    const newFooter = FooterHTML();
    if (footerRegex.test(content)) {
      content = content.replace(footerRegex, newFooter);
      console.log(`✅ 更新了 ${filePath} 的页脚`);
    }

    // 写入文件
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`🎉 成功更新 ${filePath}\n`);

  } catch (error) {
    console.error(`❌ 更新 ${filePath} 时出错:`, error.message);
  }
}

/**
 * 验证组件一致性
 */
function validateComponents() {
  console.log('🔍 验证组件一致性...\n');
  
  const issues = [];
  
  HTML_FILES.forEach(file => {
    const fullPath = path.join(__dirname, '..', file.path);
    
    if (!fs.existsSync(fullPath)) {
      issues.push(`❌ 文件不存在: ${file.path}`);
      return;
    }

    const content = fs.readFileSync(fullPath, 'utf8');
    
    // 检查是否有导航栏
    if (!/<header[^>]*>/i.test(content)) {
      issues.push(`⚠️  ${file.path} 缺少导航栏`);
    }
    
    // 检查是否有页脚
    if (!/<footer[^>]*>/i.test(content)) {
      issues.push(`⚠️  ${file.path} 缺少页脚`);
    }
    
    // 检查标题
    const titleMatch = content.match(/<title>(.*?)<\/title>/i);
    if (!titleMatch || titleMatch[1] !== file.title) {
      issues.push(`⚠️  ${file.path} 标题不匹配`);
    }
  });

  if (issues.length === 0) {
    console.log('✅ 所有组件都是一致的！');
  } else {
    console.log('发现以下问题:');
    issues.forEach(issue => console.log(issue));
  }
  
  return issues.length === 0;
}

/**
 * 主函数
 */
function main() {
  const args = process.argv.slice(2);
  
  if (args.includes('--validate') || args.includes('-v')) {
    validateComponents();
    return;
  }
  
  if (args.includes('--help') || args.includes('-h')) {
    console.log(`
📋 组件同步脚本使用说明:

命令:
  node scripts/sync-components.js        # 更新所有HTML文件的组件
  node scripts/sync-components.js -v     # 验证组件一致性
  node scripts/sync-components.js -h     # 显示帮助信息

功能:
  - 统一更新所有HTML文件的导航栏
  - 统一更新所有HTML文件的页脚
  - 统一更新所有HTML文件的head标签
  - 验证组件一致性
    `);
    return;
  }

  console.log('🚀 开始同步HTML组件...\n');
  
  HTML_FILES.forEach(file => {
    updateHTMLComponents(file.path, file.title, file.description, file.currentPath);
  });
  
  console.log('🎊 组件同步完成！\n');
  
  // 自动验证
  validateComponents();
}

// 运行脚本
if (require.main === module) {
  main();
}

module.exports = {
  updateHTMLComponents,
  validateComponents,
  HTML_FILES
};