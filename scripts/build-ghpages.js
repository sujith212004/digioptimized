import { execSync } from 'child_process';
import { rm, cp } from 'fs/promises';

async function main(){
  try{
    console.log('Building production bundle for GitHub Pages with base \'/digioptimized/\'...');
    execSync('npm run build', { stdio: 'inherit', env: { ...process.env, VITE_BASE: '/digioptimized/' } });

    console.log('Removing old docs/ (if any) and copying dist/ -> docs/');
    await rm('docs', { recursive: true, force: true });
    await cp('dist', 'docs', { recursive: true });

    console.log('Staging docs/ and committing to main branch');
    try{
      execSync('git add docs', { stdio: 'inherit' });
      // Commit only if there are changes
      execSync('git commit -m "chore(pages): publish site to main/docs" || true', { stdio: 'inherit' });
    } catch(e){
      console.warn('git commit may have failed (no changes?)', e.message);
    }

    console.log('Pushing to origin main');
    execSync('git push origin main', { stdio: 'inherit' });

    console.log('Done — docs/ updated and pushed. Configure GitHub Pages to serve from main/docs.');
  }catch(err){
    console.error('Build/deploy failed:', err);
    process.exit(1);
  }
}

await main();
