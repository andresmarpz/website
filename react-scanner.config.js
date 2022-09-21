module.exports = {
    crawlFrom: './pages',
    includeSubComponents: true,
    importedFrom: '@/components/ui/LinkPreview',
    processors: [
        'raw-report',
        ({ report, output }) => new Promise((resolve, reject) => {
			let result = {
                links: []
            };

			try{
				const entries = report['LinkPreview']['instances'];

				entries.forEach((entry) => {
					const url = entry['props']['href'];
					result.links.push(url);
				});
	
				output(result, 'mocks/paths.json');
			}catch(err){
				reject(err)
				return undefined;
			}

            resolve()
		})
    ]
};
