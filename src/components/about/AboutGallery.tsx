
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import Gallery from '../Gallery';

const AboutGallery: React.FC = () => {
  const { t } = useLanguage();

  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1518224071898-d1642604e3b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
      alt: t('about.gallery.churchInterior'),
      size: 'large' as 'large'
    },
    {
      src: 'https://images.unsplash.com/photo-1541331913542-3e775ab48a59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      alt: t('about.gallery.churchIcons'),
      size: 'small' as 'small'
    },
    {
      src: 'https://images.unsplash.com/photo-1594905883965-ba245250c1c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      alt: t('about.gallery.churchExterior'),
      size: 'medium' as 'medium'
    },
    {
      src: 'https://images.unsplash.com/photo-1614351636041-21b1dffe76a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      alt: t('about.gallery.churchBellTower'),
      size: 'small' as 'small'
    },
    {
      src: 'https://images.unsplash.com/photo-1629111963021-146f7e4651f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      alt: t('about.gallery.churchDome'),
      size: 'medium' as 'medium'
    },
    {
      src: 'https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
      alt: t('about.gallery.cathedralInterior'),
      size: 'small' as 'small'
    }
  ];

  return (
    <section className="section">
      <div className="container-custom">
        <div className="card">
          <h2 className="text-2xl font-serif mb-6 text-orthodox-blue border-b border-orthodox-gold pb-2">
            {t('about.gallery.title')}
          </h2>
          
          <Gallery images={galleryImages} />
        </div>
      </div>
    </section>
  );
};

export default AboutGallery;
