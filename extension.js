class piExtension {
  getInfo() {
    return {
      // `id` is the internal ID of the extension
      // Only the characters a-z and 0-9 can be used. No spaces or special characters.
      id: 'piextension',

      // `name` is what the user sees in the toolbox
      name: 'π Extension',

      blocks: [ {
          // `opcode` is the internal ID of the block
          // It should never change!
          // It corresponds to the class method with the same name.
          opcode: 'pi',
          blockType: Scratch.BlockType.REPORTER,
          text: 'π (pi)'
        } ]
      
    };
  }

  pi() {return '3.14159265359';} // * Corresponds to `opcode: 'pi'` above
}

// Call Scratch.extensions.register to register your extension
// Make sure to register each extension exactly once
Scratch.extensions.register(new PiExtension());
