module.exports = {
    brew: [
        // http://conqueringthecommandline.com/book/ack_ag
        'ack',
        'ag',
        // Install GNU core utilities (those that come with OS X are outdated)
        // Don’t forget to add `$(brew --prefix coreutils)/libexec/gnubin` to `$PATH`.
        'coreutils',
        'dos2unix',
        // Install GNU `find`, `locate`, `updatedb`, and `xargs`, `g`-prefixed
        'findutils',
        // Install GNU `sed`, overwriting the built-in `sed`
        // so we can do "sed -i 's/foo/bar/' file" instead of "sed -i '' 's/foo/bar/' file"
        'gnu-sed --with-default-names',
        // better, more recent grep
        'homebrew/dupes/grep',
        'tree',
        // better, more recent vim
        'vim --with-override-system-vi',
        'watch',
        // Install wget with IRI support
        'wget --enable-iri'
    ],
    cask: [
        '1password',
        'android-studio',
        //'atom',
        'chromium',
        'cleanmymac',
        'dash',
        'dropbox',
        'evernote',
        'expo-xde',
        'focused',
        'imageoptim',
        'insomnia',
        'iterm2',
        'kaleidoscope',
        'macdown',
        'macvim',
        'moom',
        'near-lock',
        'phpstorm',
        'pixelstick',
        'proxpn',
        'screenflow',
        'sequel-pro',
        'sketch',
        'slack',
        'sourcetree',
        'spark',
        'spotify',
        'sublime-text',
        'transmission',
        'vagrant',
        'virtualbox',
        'yummy-ftp'
    ],
    gem: [
    ],
    npm: [
        'bower',
        'gulp',
        'vtop'
    ]
};
